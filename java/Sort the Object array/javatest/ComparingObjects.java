import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Employee implements Comparable<Employee> {
  int age;
  int salary;
  String name;

  Employee(String name, int age, int salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  public String getName() {
    return this.name;
  }

  public int getAge() {
    return this.age;
  }

  public int getSalary() {
    return this.salary;
  }

  @Override
  public int compareTo(Employee employee) {
    return this.age - employee.age;
  }

  public String toString() {
    return this.name + " " + this.age + " " + this.salary;
  }
}

class AgeComparator implements Comparator<Employee> {

  @Override
  public int compare(Employee emp1, Employee emp2) {
      return emp1.getAge() - emp2.getAge();
  }
}

class SalaryComparator implements Comparator<Employee> {

  @Override
  public int compare(Employee emp1, Employee emp2) {
      return emp1.getSalary() - emp2.getSalary();
  }
}

class NameComparator implements Comparator<Employee> {

  @Override
  public int compare(Employee emp1, Employee emp2) {
      return emp1.getName().compareTo(emp2.getName());
  }
}

public class ComparingObjects {

  public static void main(String[] args) {

    int a[] = {7, 1, 80, 14};

    Arrays.sort(a);

    for(int i = 0; i < a.length; i++) {
      System.out.print(a[i] + " ");
    }

    System.out.println();
    System.out.println("//////////////////////////////////////////////");

    Employee[] allEmp = new Employee[3];

    allEmp[0] = new Employee("Sachin", 45, 25000);
    allEmp[1] = new Employee("Kohli", 34, 35000);
    allEmp[2] = new Employee("Dhoni", 40, 30000);

    Arrays.sort(allEmp);

    for(int i = 0; i < allEmp.length; i++) {
      System.out.println(allEmp[i] + " ");
    }

    System.out.println("//////////////////////////////////////////////");

    Arrays.sort(allEmp, new AgeComparator());

    for(int i = 0; i < allEmp.length; i++) {
      System.out.println(allEmp[i] + " ");
    }

    System.out.println("//////////////////////////////////////////////");

    Arrays.sort(allEmp, new SalaryComparator());

    for(int i = 0; i < allEmp.length; i++) {
      System.out.println(allEmp[i] + " ");
    }

    System.out.println("//////////////////////////////////////////////");

    Arrays.sort(allEmp, new NameComparator());

    for(int i = 0; i < allEmp.length; i++) {
      System.out.println(allEmp[i] + " ");
    }

    System.out.println("//////////////////////////////////////////////");

    List<Employee> empList = new ArrayList<>();

    empList.add(new Employee("Sachin", 45, 25000));
    empList.add(new Employee("Kohli", 34, 35000));
    empList.add(new Employee("Dhoni", 40, 30000));

    Collections.sort(empList);
    System.out.println(empList);

    Collections.sort(empList, new AgeComparator());
    System.out.println(empList);

    Collections.sort(empList, new SalaryComparator());
    System.out.println(empList);

    Collections.sort(empList, new NameComparator());
    System.out.println(empList);

  }

}
