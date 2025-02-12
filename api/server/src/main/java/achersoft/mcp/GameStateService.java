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
                        .affiliation(Affiliation.SHIELD)
                        .crisis("Daemons Downtown")
                        .victoryPoints(0)
                        .color(Color.BLUE)
                        .build())
                .playerTwo(Player.builder()
                        .name("Gary McGlauflin")
                        .affiliation(Affiliation.BLACK_ORDER)
                        .crisis("Gamma Shelter")
                        .victoryPoints(0)
                        .color(Color.RED)
                        .build())
                .round(1)
                .threat(19)
                .build();
    }

    public GameState reset() {
        this.setGameState(GameState.builder()
                .playerOne(Player.builder()
                        .name("Jon Doyon")
                        .affiliation(Affiliation.SHIELD)
                        .crisis("Daemons Downtown")
                        .victoryPoints(0)
                        .color(Color.BLUE)
                        .build())
                .playerTwo(Player.builder()
                        .name("Gary McGlauflin")
                        .affiliation(Affiliation.BLACK_ORDER)
                        .crisis("Gamma Shelter")
                        .victoryPoints(0)
                        .color(Color.RED)
                        .build())
                .round(1)
                .threat(19)
                .build());
        return gameState;
    }

    public GameState setThreat(int threat) {
        this.getGameState().setThreat(threat);
        return gameState;
    }

    public GameState playerReverse() {
        this.getGameState().setPlayerReversed(!this.getGameState().isPlayerReversed());
        return gameState;
    }

    public GameState incrementRound() {
        this.getGameState().setRound(this.getGameState().getRound() + 1);
        return gameState;
    }

    public GameState decrementRound() {
        if (this.getGameState().getRound() > 1)
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

    public GameState setPlayerOneAffiliation(Affiliation playerOneAffiliation) {
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

    public GameState setPlayerTwoAffiliation(Affiliation playerTwoAffiliation) {
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
