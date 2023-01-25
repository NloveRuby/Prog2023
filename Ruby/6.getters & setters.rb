
class GettersSetters
  def initialize(name)
    @name=name
    # if you creat an object of this class will through error. Define a func that print the name to avoid it.
  end

    #create a getter method
  def name
    puts @name
  end

   #create a setter method, using equal sign
  def name=(name)
    @name=name
  end

end

ob1= GettersSetters.new("Trilp y")
#ob1.name
#change the  name value using setter
ob1.name="kkk"
ob1.name
