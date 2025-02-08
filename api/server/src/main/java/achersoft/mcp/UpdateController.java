package achersoft.mcp;

import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/update")
@AllArgsConstructor
public class UpdateController {

        private final SimpMessagingTemplate messagingTemplate;
        private GameStateService gameStateService;

        @PostMapping("/round/up")
        public void roundUp() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.incrementRound());
        }

        @PostMapping("/round/down")
        public void roundDown() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.decrementRound());
        }

        @PostMapping("/threat")
        public void setThreat(int threat) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setThreat(threat));
        }

        @PostMapping("/one/name")
        public void oneName(String name) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setPlayerOneName(name));
        }

        @PostMapping("/one/affiliation")
        public void oneAffiliation(String affiliation) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setPlayerOneAffiliation(affiliation));
        }

        @PostMapping("/one/crisis")
        public void oneCrisis(String crisis) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setPlayerOneCrisis(crisis));
        }

        @PostMapping("/one/score/up")
        public void oneScoreUp() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.incrementPlayerOneVictoryPoints());
        }

        @PostMapping("/one/score/down")
        public void oneScoreDown() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.decrementPlayerOneVictoryPoints());
        }

        @PostMapping("/two/name")
        public void twoName(String name) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setPlayerTwoName(name));
        }

        @PostMapping("/two/affiliation")
        public void twoAffiliation(String affiliation) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setPlayerTwoAffiliation(affiliation));
        }

        @PostMapping("/two/crisis")
        public void twoCrisis(String crisis) {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.setPlayerTwoCrisis(crisis));
        }

        @PostMapping("/two/score/up")
        public void twoScoreUp() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.incrementPlayerTwoVictoryPoints());
        }

        @PostMapping("/two/score/down")
        public void twoScoreDown() {
                messagingTemplate.convertAndSend("/topic/public", gameStateService.decrementPlayerTwoVictoryPoints());
        }
}
