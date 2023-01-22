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
    # instance variables start with @
    @name=name
    # instance variables
    @email=email
    # instance variables
    @contact=contact

  end

  def name
   # puts @name
    # you can write the below
    puts name="the name is #{@name}"  # use string interpolation with var declaration
  end

  def email
    # puts @email >> normal way
    # use string interpolation with var declaration
    puts email="the email is #{@email}"

  def contact

    # puts @contact >>normal way
    puts contact="The contact is #{@contact}" ## # use string interpolation with var declaration

    end

  end

end
#create an object using constructor, provide params
s1= Students.new("nk","qras@gmail.com",333)
# print object memory location
puts s1
s1.name
s1.email
s1.contact

# print object memory location

