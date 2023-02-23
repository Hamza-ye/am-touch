import 'package:am_touch/modules/auth/user/entities/user_authority.entity.dart';
import 'package:am_touch/shared/queries/base.query.dart';
import 'package:sqflite/sqflite.dart';

class UserAuthorityQuery extends BaseQuery<UserAuthority> {
  UserAuthorityQuery({Database? database}) : super(database: database);
}
