import {AdventureCamps} from '../../domain/model/adventure-camps.entity';
import {AdventureCampsResponse} from '../responses/adventure-camps.response';


export class assembler {
  static toEntityFromResource(resource: AdventureCampsResponse): AdventureCamps {
    return new AdventureCamps(
      resource.id,
      resource.name,
      resource.activityType,
      resource.capacity,
      resource.latitude,
      resource.longitude
    );
  }
}
