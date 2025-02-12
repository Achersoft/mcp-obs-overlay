package achersoft.mcp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Crisis {
    private @Builder.Default String name = null;
    private @Builder.Default Color color = null;
}
