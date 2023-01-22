# The vars are either local, class varaibles, instance varaibles and constants
# local var declaration with lower case or underscore, constant start with capital
a=12
name="nasr"
b=true
# local var scope is where the var is defined

#class var
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

s1 = student.new('Nasr','10th')
puts s1.total_student()










#func declaration

def tst
  num=100
  puts num*num
end

#call the function
tst()
