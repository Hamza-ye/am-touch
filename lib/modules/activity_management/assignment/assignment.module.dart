import 'package:d2_touch_teams/modules/activity_management/assignment/queries/assignment.query.dart';

class AssignmentModule {
  static createTables() async {
    await AssignmentQuery().createTable();
  }

  AssignmentQuery get assignment => AssignmentQuery();
}