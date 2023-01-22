#syntax

# class ClassName
#   #do somthimg
# end

class ExampleClass
  # define instance method (used by instance)
  def print_hello
    puts "hello World"
  end
  # define class method
  # use self.className
  # you can't use this into object
  #  to invoke class method, call the class name.method name

  def self.class_method_example
    puts "hello Nasr"
  end
end

#instantiate an object of ExampleClass

ob1= ExampleClass.new
#now call the ob1
ob1.print_hello()

ExampleClass.class_method_example

# use instance variables in the class, see below

class Students

  def initialize(name,email,contact)
    # instance variables
    @name=name
    # instance variables
    @email=email
    # instance variables 
    @contact=contact

  end

  def name
    puts @name
  end

  def email

    puts @email

  def contact

    @contact

    end

  end



end
