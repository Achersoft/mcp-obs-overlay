package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
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
    private @Builder.Default int gruntPadding = 50;
    private @Builder.Default List<Character> playerTwoCharacters = new ArrayList<>();
    private @Builder.Default List<Character> playerOneCharacters =
            Arrays.asList(Character.builder()
                            .name("Red Skull 2")
                    .maxHealth(7)
                    .currentDamage(2)
                    .percentHealth((int)(((double)2/7) * 100))
                    .gruntsMaxHealth(3)
                    .hasGrunts(true)
                    .showGrunts(true)
                            .build(),
                    Character.builder()
                            .name("Namor").ko(true).injured(true).maxHealth(6).currentDamage(6).percentHealth(100).build(),
                    Character.builder()
                            .name("Namor1").activated(true).build(),
                    Character.builder()
                            .name("Namor2").dazed(true).build(),
                    Character.builder()
                            .name("Namor3").hasExtract(true).build(),
                    Character.builder()
                            .name("Namor4").activated(true).dazed(true).build()
                    );
}
