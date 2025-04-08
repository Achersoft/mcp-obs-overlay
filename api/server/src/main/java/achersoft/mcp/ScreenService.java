package achersoft.mcp;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Data
public class ScreenService {

    private GameStateService gameStateService;

    public ScreenService(GameStateService gameStateService) {
        this.gameStateService = gameStateService;
    }

    public GameState setCharacterWidth(int characterWidth) {
        this.gameStateService.getGameState().setCharacterWidth(characterWidth);
        return this.gameStateService.getGameState();
    }

    public GameState setCharacterOffset(int characterOffset) {
        this.gameStateService.getGameState().setCharacterOffset(characterOffset);
        return this.gameStateService.getGameState();
    }

    public GameState setGruntPadding(int gruntPadding) {
        this.gameStateService.getGameState().setGruntPadding(gruntPadding);
        return this.gameStateService.getGameState();
    }

    public GameState setTimer(Date timerDate) {
        this.gameStateService.getGameState().setCountdownDate(timerDate);
        return this.gameStateService.getGameState();
    }
}
