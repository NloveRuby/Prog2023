#creat a class

class Student
  #class variable
  @@student_count =0

  def initialize(name,standard)
    # stance var
    @name=name
    # stance var
    @standard= standard
  end

  def total_student
    #class variable
    @@student_count+=1
    puts "total students are #{@@student_count}"
  end

end
