package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Player {

    private String name;
    private String affiliation;
    private Crisis crisis;
    private int victoryPoints;

}
