package achersoft.mcp;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CharacterStateService {

    private GameStateService gameStateService;

    public CharacterStateService(GameStateService gameStateService) {
        this.gameStateService = gameStateService;
    }

    public GameState modifyCharactersPlayerOne(List<Character> characters) {
        List<String> activeCharacters = new ArrayList<>();

        if (characters != null && characters.size() > 0) {
            activeCharacters = characters .stream().map(Character::getId).collect(Collectors.toList());
        }

        if (!this.gameStateService.getGameState().getPlayerOneCharacters().isEmpty()) {
            final List<String> finalActiveCharacters = activeCharacters;
            this.gameStateService.getGameState().setPlayerOneCharacters(
                    this.gameStateService.getGameState().getPlayerOneCharacters().stream()
                            .filter(character -> finalActiveCharacters.contains(character.getId())).collect(Collectors.toList()));
        }

        List<String> currentCharacters = new ArrayList<>();
        if (this.gameStateService.getGameState().getPlayerOneCharacters() != null && this.gameStateService.getGameState().getPlayerOneCharacters().size() > 0) {
            currentCharacters = this.gameStateService.getGameState().getPlayerOneCharacters().stream().map(Character::getId).collect(Collectors.toList());
        }

        final List<String> finalCurrentCharacters = currentCharacters;
        characters.forEach(character -> {
            if (finalCurrentCharacters.isEmpty() || !finalCurrentCharacters.contains(character.getId())) {
                this.gameStateService.getGameState().getPlayerOneCharacters().add(character.toBuilder()
                        .maxHealth(character.getMaxHealthNormal())
                .image(character.getNormalImage()).build());
            }
        });

        return this.gameStateService.getGameState();
    }

    public GameState modifyCharactersPlayerTwo(List<Character> characters) {
        List<String> activeCharacters = new ArrayList<>();

        if (characters != null && characters.size() > 0) {
            activeCharacters = characters .stream().map(Character::getId).collect(Collectors.toList());
        }

        if (!this.gameStateService.getGameState().getPlayerTwoCharacters().isEmpty()) {
            final List<String> finalActiveCharacters = activeCharacters;
            this.gameStateService.getGameState().setPlayerTwoCharacters(
                    this.gameStateService.getGameState().getPlayerTwoCharacters().stream()
                            .filter(character -> finalActiveCharacters.contains(character.getId())).collect(Collectors.toList()));
        }

        List<String> currentCharacters = new ArrayList<>();
        if (this.gameStateService.getGameState().getPlayerTwoCharacters() != null && this.gameStateService.getGameState().getPlayerTwoCharacters().size() > 0) {
            currentCharacters = this.gameStateService.getGameState().getPlayerTwoCharacters().stream().map(Character::getId).collect(Collectors.toList());
        }

        final List<String> finalCurrentCharacters = currentCharacters;
        characters.forEach(character -> {
            if (finalCurrentCharacters.isEmpty() || !finalCurrentCharacters.contains(character.getId())) {
                this.gameStateService.getGameState().getPlayerTwoCharacters().add(character.toBuilder()
                        .maxHealth(character.getMaxHealthNormal())
                        .image(character.getNormalImage()).build());
            }
        });

        return this.gameStateService.getGameState();
    }

    public GameState playerOneTakeDamage(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.getCurrentDamage() < character.getMaxHealth()) {
                    character.setCurrentDamage(character.getCurrentDamage() + 1);
                    normalize(character);
                }
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneTakeDamageGrunts(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.getGruntsCurrentDamage() < character.getGruntsMaxHealth()) {
                    character.setGruntsCurrentDamage(character.getGruntsCurrentDamage() + 1);
                    normalize(character);
                }
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState cleanUpAndPower() {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(this::cleanUpAndPowerCharacter);
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(this::cleanUpAndPowerCharacter);
        return this.gameStateService.getGameState();
    }

    private void cleanUpAndPowerCharacter(Character character) {
        if (character.isKo())
            return;

        if (character.isDazed()) {
            if (character.isTransformFromDaze()) {
                character.setMaxHealth(character.getMaxHealthTransformed());
                character.setCurrentDamage(0);
                character.setTransformed(true);
            } else if (character.isImmortalFromDaze()) {
                character.setCurrentDamage(character.getMaxHealth()-character.getCurrentPower());
                character.setCurrentPower(0);
                character.setInjured(true);
            } else {
                character.setMaxHealth(character.getMaxHealthInjured());
                character.setCurrentDamage(0);
                character.setInjured(true);
            }

            character.setDazed(false);
        }

        if (character.isGruntsKo()) {
            character.setShowGrunts(false);
            character.setGruntsCurrentDamage(0);
        }

        character.setCurrentPower(character.getCurrentPower()+character.getPowerGain());

        normalize(character);
    }

    private void normalize(Character character) {
        if (character.getCurrentDamage() >= character.getMaxHealth()) {
            if (character.isInjured())
                character.setKo(true);
            else
                character.setDazed(true);
            character.setHasExtract(false);
        } else {
            character.setDazed(false);
            character.setKo(false);
        }

        if (character.isHasGrunts()) {
            if (character.getGruntsCurrentDamage() >= character.getGruntsMaxHealth()) {
                character.setGruntsKo(true);
                character.setGruntsHasExtract(false);
            } else {
                character.setGruntsKo(false);
            }

            character.setGruntPercentHealth((int)(((double)character.getGruntsCurrentDamage()/character.getGruntsMaxHealth())*100));
        }

        if (character.getCurrentPower() > character.getMaxPower()) {
            character.setCurrentPower(character.getMaxPower());
        }

        character.setPercentHealth((int)(((double)character.getCurrentDamage()/character.getMaxHealth())*100));
        character.setPercentPower((int)(((double)character.getCurrentPower()/character.getMaxPower())*100));
    }

}
