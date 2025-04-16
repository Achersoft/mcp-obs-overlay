package achersoft.mcp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Character {
    private @Builder.Default String id = UUID.randomUUID().toString();
    private @Builder.Default String name = "";
    private @Builder.Default String image = "tag-clean.png";
    private @Builder.Default String normalImage = "tag-clean.png";
    private @Builder.Default String transformImage = "tag-clean.png";
    private @Builder.Default int currentDamage = 0;
    private @Builder.Default int maxHealth = 0;
    private @Builder.Default int percentHealth = 0;
    private @Builder.Default int maxHealthNormal = 0;
    private @Builder.Default int maxHealthInjured = 0;
    private @Builder.Default int maxHealthTransformed = 0;
    private @Builder.Default int maxHealthTransformedInjured = 0;
    private @Builder.Default int currentPower = 0;
    private @Builder.Default int maxPower = 10;
    private @Builder.Default int percentPower = 0;
    private @Builder.Default int powerGain = 1;
    private @Builder.Default boolean activated = false;
    private @Builder.Default boolean hasExtract = false;
    private @Builder.Default boolean dazed = false;
    private @Builder.Default boolean ko = false;
    private @Builder.Default boolean injured = false;
    private @Builder.Default boolean canTransform = false;
    private @Builder.Default boolean transformed = false;
    private @Builder.Default boolean transformFromDaze = false;
    private @Builder.Default boolean immortalFromDaze = false;
    private @Builder.Default boolean hasGrunts = false;
    private @Builder.Default boolean showGrunts = false;
    private @Builder.Default List<Grunt> grunts = new ArrayList<>();
}
