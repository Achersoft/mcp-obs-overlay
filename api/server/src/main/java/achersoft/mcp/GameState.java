package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GameState {

    private @Builder.Default Player playerOne = Player.builder().build();
    private @Builder.Default Player playerTwo = Player.builder().build();
    private @Builder.Default int round = 1;
    private @Builder.Default int threat = 0;
    private @Builder.Default boolean playerReversed = false;
    private @Builder.Default boolean overlayReversed = false;

}
