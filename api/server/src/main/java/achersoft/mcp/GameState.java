package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Data
@Builder
public class GameState {

    private @Builder.Default Player playerOne = Player.builder().build();
    private @Builder.Default Player playerTwo = Player.builder().build();
    private @Builder.Default int round = 1;
    private @Builder.Default int threat = 0;
    private @Builder.Default boolean playerReversed = false;
    private @Builder.Default boolean overlayReversed = false;
    private @Builder.Default int characterWidth = 200;
    private @Builder.Default int characterOffset = 150;
    private @Builder.Default int gruntPadding = 50;
    private @Builder.Default Date countdownDate = new Date();
    private @Builder.Default List<Character> playerOneCharacters = new ArrayList<>();
    private @Builder.Default List<Character> playerTwoCharacters = new ArrayList<>();
}
