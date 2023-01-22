package Printf;
import java.sql.Date;
import java.time.LocalDateTime;

public class prin_if {
    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.printf("Hello %s!%n", "World");
        String name = "Cameron";
        String site = "TechTarget";
        System.out.printf("I like the stuff %s writes on %S. %n", name, site);
        System.out.println();
        int  above = -98765;
        long below =  54321L;
        System.out.printf("%,d :: %d", above, below);
        System.out.println();
        double top    = 1234.12345;
        float  bottom = 1234.12345f;
        System.out.printf("%+,.3f :: %,.5f", top, bottom);
        /*
         * %s 	 String of text
        %f 	 floating point value (float or double)
        %e 	 Exponential, scientific notation of a float or double
        %b 	 boolean true or false value
        %c 	 Single character char
        %d 	 Base 10 integer, such as a Java int, long, short or byte
        %o 	 Octal number
        %x 	 Hexadecimal number
        %% 	 Percentage sign
        %n 	 New line, aka carriage-return
        %tY 	 Year to four digits
        %tT 	Time in format of HH:MM:SS ( ie 21:46:30)

        %tH to display the hour
        %tM to display the minutes
        %tS to display the seconds
        %tp to print am or pm
        %tx for the time-zone offset


        %tA to printf the day of the week in full
        %ta to printf the abbreviated day of the week
        %tB to printf the full name of the month
        %tb to printf the abbreviated month name
        %td to printf the day of the month
        %tY to output all four digits of the year
        %tY to printf the last two digits of the year
        %tp to display am or pm
        %tL to display the millisecond offset
        %tz to display the time-zone offset



         * 
         * 
        */

        Date d = new Date(below);
        System.out.printf("%tH %tM %tS %tz", d, d, d, d);

        System.out.println();

        LocalDateTime dt = LocalDateTime.now();
        System.out.printf(" %ta %te, %tY %tT %tp ", dt, dt, dt, dt, dt);

        System.out.printf("--------------------------------%n");
        System.out.printf(" Java's Primitive Types         %n");
        System.out.printf(" (printf table example)         %n");

        System.out.printf("--------------------------------%n");
        System.out.printf("| %-10s | %-8s | %4s |%n", "CATEGORY", "NAME", "BITS");
        System.out.printf("--------------------------------%n");

        System.out.printf("| %-10s | %-8s | %04d |%n", "Floating", "double",  64);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Floating", "float",   32);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Integral", "long",    64);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Integral", "int",     32);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Integral", "char",    16);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Integral", "short",   16);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Integral", "byte",    8);
        System.out.printf("| %-10s | %-8s | %04d |%n", "Boolean",  "boolean", 1);

        System.out.printf("--------------------------------%n");

        /*
                * ‘%s’ 	 Java 	

        'Java'

        ‘%15s’ 	 Java 	

        '           Java'

        ‘%-15s ‘ 	 Java 	

        'Java           '

        ‘%d’ 	 123,457,890 	

        '123457890'

        ‘%,15d’ 	 123,457,890 	

        '    123,457,890'

        ‘%+,15d’ 	 123457890 	

        '   +123,457,890'

        ‘%-+,15d’ 	 123457890 	

        '+123,457,890   '

        ‘%0,15d’ 	 123457890 	

        '0000123,457,890'

        ‘%15o’ 	 123457890 	

        '      726750542'

        ‘%15x’ 	 123457890 	

        '        75bd162'

        ‘%15f’ 	 12345.123450 	

        '   12345.123450'

        ‘%-15.3f’ 	12345.123450 	

        '12345.123      '

        ‘%015.3f’ 	 12345.123450 	

        '00000012345.123'

        ‘%e’ 	 12345.123450 	

        '1.234579e+08'

        ‘%.2e’ 	 12345.123450 	

        '1.23e+08'

        ‘%7tH %<-7tM’ 	

        new Date()

            

        '     22 35     '

        ‘%15tT’ 	

        LocalDateTime.now()

            

        '       22:35:53'
        */
    }
}
