package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Player {

    private String name;
    private String affiliation;
    private String crisis;
    private String color;
    private int victoryPoints;

}
