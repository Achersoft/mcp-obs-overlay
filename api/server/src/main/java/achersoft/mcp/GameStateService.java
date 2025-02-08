package achersoft.mcp;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class GameStateService {

    private GameState gameState;

    public GameStateService() {
        this.gameState = GameState.builder()
                .playerOne(Player.builder()
                        .name("Jon Doyon")
                        .affiliation("Shield")
                        .crisis("Daemons Downtown")
                        .victoryPoints(2)
                        .build())
                .playerTwo(Player.builder()
                        .name("Gary McGlauflin")
                        .affiliation("Black Order")
                        .crisis("Gamma Shelter")
                        .victoryPoints(0)
                        .build())
                .round(1)
                .threat(19)
                .build();
    }

    public GameState setThreat(int threat) {
        this.getGameState().setThreat(threat);
        return gameState;
    }

    public GameState incrementRound() {
        this.getGameState().setRound(this.getGameState().getRound() + 1);
        return gameState;
    }

    public GameState decrementRound() {
        if (this.getGameState().getRound() > 0)
            this.getGameState().setRound(this.getGameState().getRound() - 1);
        return gameState;
    }

    public GameState setPlayerOneName(String playerOneName) {
        this.getGameState().getPlayerOne().setName(playerOneName);
        return gameState;
    }

    public GameState setPlayerOneCrisis(String playerOneCrisis) {
        this.getGameState().getPlayerOne().setCrisis(playerOneCrisis);
        return gameState;
    }

    public GameState setPlayerOneAffiliation(String playerOneAffiliation) {
        this.getGameState().getPlayerOne().setAffiliation(playerOneAffiliation);
        return gameState;
    }

    public GameState incrementPlayerOneVictoryPoints() {
        this.getGameState().getPlayerOne().setVictoryPoints(this.getGameState().getPlayerOne().getVictoryPoints() + 1);
        return gameState;
    }

    public GameState decrementPlayerOneVictoryPoints() {
        if (this.getGameState().getPlayerOne().getVictoryPoints() > 0)
            this.getGameState().getPlayerOne().setVictoryPoints(this.getGameState().getPlayerOne().getVictoryPoints() - 1);
        return gameState;
    }

    public GameState setPlayerTwoName(String playerTwoName) {
        this.getGameState().getPlayerTwo().setName(playerTwoName);
        return gameState;
    }

    public GameState setPlayerTwoCrisis(String playerTwoCrisis) {
        this.getGameState().getPlayerTwo().setCrisis(playerTwoCrisis);
        return gameState;
    }

    public GameState setPlayerTwoAffiliation(String playerTwoAffiliation) {
        this.getGameState().getPlayerTwo().setAffiliation(playerTwoAffiliation);
        return gameState;
    }

    public GameState incrementPlayerTwoVictoryPoints() {
        this.getGameState().getPlayerTwo().setVictoryPoints(this.getGameState().getPlayerTwo().getVictoryPoints() + 1);
        return gameState;
    }

    public GameState decrementPlayerTwoVictoryPoints() {
        if (this.getGameState().getPlayerTwo().getVictoryPoints() > 0)
            this.getGameState().getPlayerTwo().setVictoryPoints(this.getGameState().getPlayerTwo().getVictoryPoints() - 1);
        return gameState;
    }

}
