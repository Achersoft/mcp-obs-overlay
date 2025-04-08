package achersoft.mcp;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/screen")
@AllArgsConstructor
public class ScreenController {

        private final SimpMessagingTemplate messagingTemplate;
        private final ScreenService screenService;

        @PostMapping(value = "/character/width", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE, "text/plain;charset=UTF-8"})
        public void setCharacterWidth(@RequestBody int characterWidth) {
                messagingTemplate.convertAndSend("/topic/public", screenService.setCharacterWidth(characterWidth));
        }

        @PostMapping(value = "/character/offset", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE, "text/plain;charset=UTF-8"})
        public void setCharacterOffset(@RequestBody int characterOffset) {
                messagingTemplate.convertAndSend("/topic/public", screenService.setCharacterOffset(characterOffset));
        }

        @PostMapping(value = "/grunt/padding", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE, "text/plain;charset=UTF-8"})
        public void setGruntPadding(@RequestBody int gruntPadding) {
                messagingTemplate.convertAndSend("/topic/public", screenService.setGruntPadding(gruntPadding));
        }

        @PostMapping("/timer")
        public void setCountdownTimer(@RequestBody Date countdownTimer) {
                messagingTemplate.convertAndSend("/topic/public", screenService.setTimer(countdownTimer));
        }
}
