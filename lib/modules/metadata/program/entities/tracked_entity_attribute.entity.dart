import 'package:am_touch/core/annotations/index.dart';
import 'package:am_touch/shared/entities/identifiable.entity.dart';

@AnnotationReflectable
@Entity(
    tableName: 'trackedentityattribute',
    apiResourceName: 'trackedEntityAttributes')
class TrackedEntityAttribute extends IdentifiableEntity {
  TrackedEntityAttribute({required String id, required bool dirty})
      : super(id: id, dirty: dirty);
}
