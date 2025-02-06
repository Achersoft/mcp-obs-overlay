package achersoft.mcp;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class StateController {

        @MessageMapping("/reset")
        @SendTo("/topic/public")
        public GameState resetGame() {

                return GameState.builder().build();
        }

        @MessageMapping("/asa")
        @SendTo("/topic/public")
        public GameState updatePlayer(@Payload Player player) {
                return null;
        }
}
