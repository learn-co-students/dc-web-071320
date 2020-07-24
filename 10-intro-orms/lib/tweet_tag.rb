class Tweet
  attr_accessor :tag, :tweet
  @@all = []

  def self.all
    @@all
  end

  def initialize(attrs={})
    @tag = attrs['tag']
    @tweet = attrs['tweet']

    @@all << self
  end
end
