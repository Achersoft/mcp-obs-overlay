package achersoft.mcp;

import lombok.Builder;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class CharacterStateService {

    private GameStateService gameStateService;

    public CharacterStateService(GameStateService gameStateService) {
        this.gameStateService = gameStateService;
    }

    public GameState addCharacterPlayerOne(Character character) {
        this.gameStateService.getGameState().getPlayerOneCharacters().add(character);
        return this.gameStateService.getGameState();
    }

    public GameState playerOneTakeDamage(String id) {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
            if(character.getId().equals(id)) {

            }
        });
        return this.gameStateService.getGameState();
    }

    public GameState cleanUpAndPower() {
        this.gameStateService.getGameState().getPlayerOneCharacters().forEach(character -> {
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

            character.setCurrentPower(character.getCurrentPower()+character.getPowerGain());

            normalize(character);
        });
        return this.gameStateService.getGameState();
    }

    private void normalize(Character character) {
        if (character.getCurrentDamage() >= character.getMaxHealth()) {
            if (character.isInjured())
                character.setKo(true);
            else
                character.setDazed(true);
        } else {
            character.setDazed(false);
            character.setKo(false);
        }

        if (character.getCurrentPower() > character.getMaxPower()) {
            character.setCurrentPower(character.getMaxPower());
        }

        character.setPercentHealth((int)(((double)character.getCurrentDamage()/character.getMaxHealth())*100));
        character.setPercentPower((int)(((double)character.getCurrentPower()/character.getMaxPower())*100));
    }

    private @Builder.Default String id = UUID.randomUUID().toString();
    private @Builder.Default String name = "";
    private @Builder.Default String image = "tag-clean.png";
    private @Builder.Default String normalImage = "tag-clean.png";
    private @Builder.Default String transformImage = "tag-clean.png";
    private @Builder.Default int currentDamage = 0;
    private @Builder.Default int maxHealth = 0;
    private @Builder.Default int percentHealth = 0;
    private @Builder.Default int maxHealthNormal = 0;
    private @Builder.Default int maxHealthInjured = 0;
    private @Builder.Default int maxHealthTransformed = 0;
    private @Builder.Default int maxHealthTransformedInjured = 0;
    private @Builder.Default int currentPower = 0;
    private @Builder.Default int maxPower = 10;
    private @Builder.Default int percentPower = 0;
    private @Builder.Default int powerGain = 1;
    private @Builder.Default boolean activated = false;
    private @Builder.Default boolean hasExtract = false;
    private @Builder.Default boolean dazed = false;
    private @Builder.Default boolean ko = false;
    private @Builder.Default boolean injured = false;
    private @Builder.Default boolean canTransform = false;
    private @Builder.Default boolean transformed = false;
    private @Builder.Default boolean transformFromDaze = false;
    private @Builder.Default boolean immortalFromDaze = false;
    private @Builder.Default boolean hasGrunts = false;
    private @Builder.Default boolean showGrunts = false;
    private @Builder.Default int gruntsCurrentDamage = 0;
    private @Builder.Default int gruntsMaxHealth = 0;
    private @Builder.Default int gruntPercentHealth = 0;
    private @Builder.Default boolean gruntsHasExtract = false;
}
