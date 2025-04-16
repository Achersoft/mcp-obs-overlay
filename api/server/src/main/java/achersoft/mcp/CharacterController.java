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

        @PostMapping("/one/damage")
        public void playerOneTakeDamage(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneTakeDamage(id));
        }

        @PostMapping("/one/heal")
        public void playerOneHealDamage(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneHealDamage(id));
        }

        @PostMapping("/one/grunt/damage")
        public void playerOneTakeDamageGrunts(@RequestBody GruntRequest gruntRequest) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneTakeDamageGrunts(gruntRequest.getCharacterId(), gruntRequest.getGruntId()));
        }

        @PostMapping("/one/grunt/heal")
        public void playerOneHealDamageGrunts(@RequestBody GruntRequest gruntRequest) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneHealDamageGrunts(gruntRequest.getCharacterId(), gruntRequest.getGruntId()));
        }

        @PostMapping("/one/activated")
        public void playerOneToggleActivated(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneToggleActivated(id));
        }

        @PostMapping("/one/extract")
        public void playerOneToggleExtract(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneToggleHasExtract(id));
        }

        @PostMapping("/one/injured")
        public void playerOneToggleInjured(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneToggleInjured(id));
        }

        @PostMapping("/one/transform")
        public void playerOneToggleTransform(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerOneToggleTransform(id));
        }

        @PostMapping("/two/damage")
        public void playerTwoTakeDamage(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoTakeDamage(id));
        }

        @PostMapping("/two/heal")
        public void playerTwoHealDamage(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoHealDamage(id));
        }

        @PostMapping("/two/grunt/damage")
        public void playerTwoTakeDamageGrunts(@RequestBody GruntRequest gruntRequest) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoTakeDamageGrunts(gruntRequest.getCharacterId(), gruntRequest.getGruntId()));
        }

        @PostMapping("/two/grunt/heal")
        public void playerTwoHealDamageGrunts(@RequestBody GruntRequest gruntRequest) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoHealDamageGrunts(gruntRequest.getCharacterId(), gruntRequest.getGruntId()));
        }

        @PostMapping("/two/activated")
        public void playerTwoToggleActivated(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoToggleActivated(id));
        }

        @PostMapping("/two/extract")
        public void playerTwoToggleExtract(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoToggleHasExtract(id));
        }

        @PostMapping("/two/injured")
        public void playerTwoToggleInjured(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoToggleInjured(id));
        }

        @PostMapping("/two/transform")
        public void playerTwoToggleTransform(@RequestBody String id) {
                messagingTemplate.convertAndSend("/topic/public", characterStateService.playerTwoToggleTransform(id));
        }

}
