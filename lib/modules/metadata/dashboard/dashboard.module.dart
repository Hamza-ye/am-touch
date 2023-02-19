import 'package:d2_touch_teams/modules/metadata/dashboard/queries/dashboard.query.dart';
import 'package:d2_touch_teams/modules/metadata/dashboard/queries/dashboard_item.query.dart';

class DashboardModule {
  static createTables() async {
    await DashboardQuery().createTable();
    await DashboardItemQuery().createTable();
  }

  DashboardQuery get dashboard => DashboardQuery();
  DashboardItemQuery get dashboardItem => DashboardItemQuery();
}