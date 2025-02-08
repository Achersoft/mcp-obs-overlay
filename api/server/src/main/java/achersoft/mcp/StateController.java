package achersoft.mcp;

import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@AllArgsConstructor
@Controller
public class StateController {

        private GameStateService gameStateService;

        @MessageMapping("/reset")
        @SendTo("/topic/public")
        public GameState resetGame() {
                return gameStateService.getGameState();
        }

        @MessageMapping("/asa")
        @SendTo("/topic/public")
        public GameState updatePlayer(@Payload Player player) {
                return null;
        }
}
