package achersoft.mcp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Grunt {
    private @Builder.Default String id = UUID.randomUUID().toString();
    private @Builder.Default String name = "";
    private @Builder.Default String image = "tag-clean.png";
    private @Builder.Default int currentDamage = 0;
    private @Builder.Default int maxHealth = 0;
    private @Builder.Default int percentHealth = 0;
    private @Builder.Default boolean activated = false;
    private @Builder.Default boolean hasExtract = false;
    private @Builder.Default boolean ko = false;
}
