package xyz.treppi.smarthome;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class SQLConnection {
    private static Connection connection = null;

    public static boolean connected() {
        return connection != null;
    }

    public boolean connect(String mysqlHost, int mysqlPort, String mysqlDatabase, String mysqlUser, String mysqlPassword) {
        try {
            connection = DriverManager.getConnection("jdbc:mysql://"+mysqlHost+":"+mysqlPort+"/"+mysqlDatabase, mysqlUser, mysqlPassword);
            return true;
        }
        catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public ArrayList<SmarthomeCommand> getAllCommands() {
        ArrayList<SmarthomeCommand> commands = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet res = statement.executeQuery("SELECT * FROM commands WHERE executed = false");

            while(res.next()) {
                commands.add(new SmarthomeCommand(
                        res.getString("issuer"),
                        res.getInt("targetObj"),
                        res.getDouble("valueDouble"),
                        res.getString("valueStr"),
                        res.getBoolean("valuebool"),
                        res.getInt("id"),
                        res.getBoolean("executed"),
                        res.getString("action"),
                        res.getString("timestamp")
                ));
            }
        } catch (Exception e1) {
            e1.printStackTrace();
        }
        return commands;
    }
}
