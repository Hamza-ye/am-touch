import 'package:am_touch/modules/notification/entities/message.entity.dart';
import 'package:am_touch/shared/queries/base.query.dart';
import 'package:sqflite/sqflite.dart';

class MessageQuery extends BaseQuery<Message> {
  MessageQuery({Database? database}) : super(database: database);
}
