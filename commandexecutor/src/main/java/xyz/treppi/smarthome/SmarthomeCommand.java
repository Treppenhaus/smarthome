package xyz.treppi.smarthome;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class SmarthomeCommand {
    String issuer, action, valueStr, timestamp;
    int targetObj, id;
    double valueDouble;
    boolean valueBool, executed;

    public void execute() {
        // execute command, like do what is need to be done
        // ?? lol
        System.out.println("[i] executing command!\n" +
                "    issuer: " + issuer+"\n" +
                "    action: " + action + "\n" +
                "    values: String->" + valueStr+" | double->" + valueDouble + " | bool->" + valueBool+"\n" +
                "    timestamp: " + timestamp);

        if(action.equalsIgnoreCase("webRequest")) {
            // just perform a web request to the URL provided in valueString
            if(valueStr == null) {
                System.out.println("[!] action nis web request but valueStr is null, should be URL instead!");
                return;
            }
            performWebrequest(valueStr);
        }
    }

    private void performWebrequest(String url_) {
        try {
            URL url = new URL(url_);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    public SmarthomeCommand(String issuer, int targetObj, double valueDouble, String valueStr
    , boolean valueBool, int id, boolean executed, String action, String timestamp) {
        this.issuer = issuer;
        this.targetObj = targetObj;
        this.valueDouble = valueDouble;
        this.valueStr = valueStr;
        this.valueBool = valueBool;
        this.id = id;
        this.executed = executed;
        this.action = action;
        this.timestamp = timestamp;
    }
}
