package achersoft.mcp;

import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/screen")
@AllArgsConstructor
public class ScreenController {

        private final SimpMessagingTemplate messagingTemplate;
        private final GameStateService gameStateService;

        @PostMapping("/character/width")
        public void setCharacterWidth(int characterWidth) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setCharacterWidth(characterWidth));
        }

        @PostMapping("/character/offset")
        public void setCharacterOffset(int characterOffset) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setCharacterOffset(characterOffset));
        }

        @PostMapping("/grunt/padding")
        public void setGruntPadding(int gruntPadding) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setGruntPadding(gruntPadding));
        }
}
