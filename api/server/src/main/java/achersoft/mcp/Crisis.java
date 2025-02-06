package achersoft.mcp;

public enum Crisis {

    RESEARCH_STATION_ATTACKED("Research Station Attacked!", Color.RED, 15);

    private String name;
    private Color color;
    private int threatLevel;

    Crisis(String name, Color color, int threatLevel) {
        this.name = name;
        this.color = color;
        this.threatLevel = threatLevel;
    }
}
