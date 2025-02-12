package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Player {

    private @Builder.Default String name = null;
    private @Builder.Default String affiliation = null;
    private @Builder.Default Crisis crisis = Crisis.builder().build();
    private @Builder.Default Color color = Color.GREY;
    private @Builder.Default int victoryPoints = 0;

}
