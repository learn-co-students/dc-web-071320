# * Trip (tourist, landmark)
#   * belongs to a tourist
#   * belongs to a landmark

class Trip
  attr_reader :tourist, :landmark

  @@all = [] # defining this to hold on to all the trips

  def initialize(tourist, landmark)
    @tourist = tourist
    @landmark = landmark

    @@all << self # add the current instance we're creating into all the trips
  end

  def self.all
    @@all
  end

  # attr_reader :lettuce, :cabbage
  # def lettuce
  #   @lettuce
  # end
  #
  # def cabbage
  #   @cabbage
  # end
end
