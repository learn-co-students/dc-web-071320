class Tweet
  attr_accessor :username
  @@all = []

  def self.all
    @@all
  end

  def initialize(attrs={})
    @username = attrs['username']

    @@all << self
  end
end
