
class GettersSetters
  def initialize(name)
    @name=name
    # if you creat an object of this class will through error. Define a func that print the name to avoid it.
  end

  def name
    puts @name
  end


end

ob1= GettersSetters.new("Trilp y")
ob1.name
