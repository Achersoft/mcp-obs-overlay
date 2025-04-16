package achersoft.mcp;

import lombok.Builder;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

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

    public GameState playerOneHealDamage(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.getCurrentDamage() > 0) {
                    character.setCurrentDamage(character.getCurrentDamage() - 1);
                    normalize(character);
                }
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneTakeDamageGrunts(String characterId, String gruntId) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(characterId)) {
                character.getGrunts().forEach(grunt -> {
                    if(grunt.getId().equals(gruntId)) {
                        if (grunt.getCurrentDamage() < grunt.getMaxHealth()) {
                            grunt.setCurrentDamage(grunt.getCurrentDamage() + 1);
                            normalize(character);
                        }
                    }
                });
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneHealDamageGrunts(String characterId, String gruntId) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(characterId)) {
                character.getGrunts().forEach(grunt -> {
                    if(grunt.getId().equals(gruntId)) {
                        if (grunt.getCurrentDamage() > 0) {
                            grunt.setCurrentDamage(grunt.getCurrentDamage() - 1);
                            normalize(character);
                        }
                    }
                });
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneToggleActivated(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                character.setActivated(!character.isActivated());
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneToggleHasExtract(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                character.setHasExtract(!character.isHasExtract());
                normalize(character);
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneToggleInjured(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                character.setInjured(!character.isInjured());
                normalize(character);
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerOneToggleTransform(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.isCanTransform()) {
                    character.setTransformed(!character.isTransformed());

                    if (character.isTransformed()) {
                        character.setImage(character.getTransformImage());
                        if (character.isInjured())
                            character.setMaxHealth(character.getMaxHealthTransformedInjured());
                        else
                            character.setMaxHealth(character.getMaxHealthTransformed());
                    } else {
                        character.setImage(character.getNormalImage());
                        if (character.isInjured())
                            character.setMaxHealth(character.getMaxHealthInjured());
                        else
                            character.setMaxHealth(character.getMaxHealthNormal());
                    }
                    normalize(character);
                }
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoTakeDamage(String id) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.getCurrentDamage() < character.getMaxHealth()) {
                    character.setCurrentDamage(character.getCurrentDamage() + 1);
                    normalize(character);
                }
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoHealDamage(String id) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.getCurrentDamage() > 0) {
                    character.setCurrentDamage(character.getCurrentDamage() - 1);
                    normalize(character);
                }
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoTakeDamageGrunts(String characterId, String gruntId) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(characterId)) {
                character.getGrunts().forEach(grunt -> {
                    if(grunt.getId().equals(gruntId)) {
                        if (grunt.getCurrentDamage() < grunt.getMaxHealth()) {
                            grunt.setCurrentDamage(grunt.getCurrentDamage() + 1);
                            normalize(character);
                        }
                    }
                });
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoHealDamageGrunts(String characterId, String gruntId) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(characterId)) {
                character.getGrunts().forEach(grunt -> {
                    if(grunt.getId().equals(gruntId)) {
                        if (grunt.getCurrentDamage() > 0) {
                            grunt.setCurrentDamage(grunt.getCurrentDamage() - 1);
                            normalize(character);
                        }
                    }
                });
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoToggleActivated(String id) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                character.setActivated(!character.isActivated());
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoToggleHasExtract(String id) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                character.setHasExtract(!character.isHasExtract());
                normalize(character);
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoToggleInjured(String id) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                character.setInjured(!character.isInjured());
                normalize(character);
            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState playerTwoToggleTransform(String id) {
        this.gameStateService.getGameState().getPlayerTwoCharacters().forEach(character -> {
            if(character.getId().equals(id)) {
                if (character.isCanTransform()) {
                    character.setTransformed(!character.isTransformed());

                    if (character.isTransformed()) {
                        character.setImage(character.getTransformImage());
                        if (character.isInjured())
                            character.setMaxHealth(character.getMaxHealthTransformedInjured());
                        else
                            character.setMaxHealth(character.getMaxHealthTransformed());
                    } else {
                        character.setImage(character.getNormalImage());
                        if (character.isInjured())
                            character.setMaxHealth(character.getMaxHealthInjured());
                        else
                            character.setMaxHealth(character.getMaxHealthNormal());
                    }
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

        character.setActivated(false);

        character.setCurrentPower(character.getCurrentPower()+character.getPowerGain());

        normalize(character);
    }

    private void normalize(Character character) {
        if (character.getCurrentDamage() >= character.getMaxHealth()) {
            if (character.isInjured()) {
                character.setKo(true);
                character.setDazed(false);
            } else {
                character.setKo(false);
                character.setDazed(true);
            }
            character.setHasExtract(false);
        } else {
            character.setDazed(false);
            character.setKo(false);
        }

        if (character.isHasGrunts() && !CollectionUtils.isEmpty(character.getGrunts())) {
            character.getGrunts().forEach(grunt -> {
                if (grunt.getCurrentDamage() >= grunt.getMaxHealth()) {
                    grunt.setKo(true);
                    grunt.setHasExtract(false);
                } else {
                    grunt.setKo(false);
                }

                grunt.setPercentHealth((int)(((double)grunt.getCurrentDamage()/grunt.getMaxHealth())*100));
            });
        }

        if (character.getCurrentPower() > character.getMaxPower()) {
            character.setCurrentPower(character.getMaxPower());
        }

        character.setPercentHealth((int)(((double)character.getCurrentDamage()/character.getMaxHealth())*100));
        character.setPercentPower((int)(((double)character.getCurrentPower()/character.getMaxPower())*100));
    }

}
