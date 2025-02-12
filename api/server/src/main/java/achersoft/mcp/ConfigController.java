package achersoft.mcp;

import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/config")
@AllArgsConstructor
public class ConfigController {

        private final SimpMessagingTemplate messagingTemplate;
        private final GameStateService gameStateService;

        @GetMapping("/reset")
        public void reset() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.reset());
        }

        @GetMapping("/state")
        public GameState getState() {
                return gameStateService.getGameState();
        }
}
