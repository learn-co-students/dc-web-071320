# * Landmark (name, city)
#   * has many trips
#   * has many tourists through trips

class Landmark
  @@all = []

  def initialize(name, city)
    @name = name
    @city = city

    @@all << self
  end

  def trips
    Trip.all.select do |trip|
      trip.landmark == self
    end
  end

  def tourists
    trips.map do |trip|
      trip.tourist
    end
  end

  def self.all
    @@all
  end
end
