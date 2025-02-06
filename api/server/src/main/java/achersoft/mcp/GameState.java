package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GameState {

    private Player playerOne;
    private Player playerTwo;
    private int round;

}
