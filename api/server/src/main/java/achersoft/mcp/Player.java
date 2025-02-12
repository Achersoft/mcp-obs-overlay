package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Player {

    private @Builder.Default String name = "Player";
    private @Builder.Default Affiliation affiliation = Affiliation.UNAFFILIATED;
    private @Builder.Default String crisis = "";
    private @Builder.Default Color color = Color.GREY;
    private @Builder.Default int victoryPoints = 0;

}
