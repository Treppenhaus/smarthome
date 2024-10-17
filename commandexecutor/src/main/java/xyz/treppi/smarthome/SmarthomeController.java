package xyz.treppi.smarthome;

public class SmarthomeController {
    private static SQLConnection sql = new SQLConnection();

    public static void main(String[] args) {
        if(!sql.connect(
                "localhost",
                3306,
                "smarthome",
                "root",
                "")) {
            System.out.println("[!] could not connect to sql database! shutting down...");
            return;
        }


        //while(true) {
            try {
                Thread.sleep(300);
                System.out.println("[i] checking for new commands...");

                sql.getAllCommands().forEach(SmarthomeCommand::execute);

            }catch ( Exception e1) {
                e1.printStackTrace();
            }

            //}
    }
}