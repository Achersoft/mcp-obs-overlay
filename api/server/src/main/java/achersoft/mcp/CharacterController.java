package achersoft.mcp;

import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/character")
@AllArgsConstructor
public class CharacterController {

        private final SimpMessagingTemplate messagingTemplate;
        private final CharacterStateService characterStateService;

        @PostMapping("/one")
        public void modifyCharactersPlayerOne(@RequestBody List<Character> characters) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.modifyCharactersPlayerOne(characters));
        }

        @PostMapping("/two")
        public void modifyCharactersPlayerTwo(@RequestBody List<Character> characters) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.modifyCharactersPlayerTwo(characters));
        }

}
