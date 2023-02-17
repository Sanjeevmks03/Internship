import java.util.InputMismatchException;
import java.util.Scanner;

public class UserScoreException {
    public static void main(String[] args) {
        int flag = 0;
        while (flag == 0) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Pleae enter one number");
            try {
                String string = sc.next();
                Double n=Double.parseDouble(string); 
                if (n > 100 || n < 0) {
                    throw new ScoreException("The score must be >= 0 and <= 100!");
                }

            }
            catch(NumberFormatException e){
                System.out.println("Exception is :: " + e);
            } catch (ScoreException e) {
                System.out.println("Exception is :: " + e.getMessage());

            }finally {
                int k = 0;
                while (k == 0) {
                    try {

                        System.out.println("Do you want to enter another score? type yes/Y/No::");
                        String str = new String();
                        sc.nextLine();
                        str = sc.next();
                        if (str.equalsIgnoreCase("yes") || str.equalsIgnoreCase("Y")) {
                            k++;
                            continue;

                        } else if (str.equalsIgnoreCase("No")) {
                            flag++;
                            k++;
                            System.out.println("You Entered No,  Thankyou");
                        } else {
                            throw new ScoreException("Please enter a valid input::");
                        }
                    } catch (Exception j) {
                        System.out.println("Exception is ::" + j);
                    }
                }
            }

        }
    }
}
