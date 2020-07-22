# * Tourist (name)
#   * has many trips
#   * has many landmarks through trips

class Tourist
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def trips
    Trip.all.select do |trip|
      trip.tourist == self
    end
  end

  def landmarks
    trips.map do |trip|
      trip.landmark
    end
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    Tourist.all.find do |tourist|
      tourist.name == name
    end
  end

  def visit_landmark(landmark) # Landmark instance
    Trip.new(self, landmark)
  end

end
