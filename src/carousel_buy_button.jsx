import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    $('#ca-container').contentcarousel();
  }

  render() {

    return (
      <div id="ca-container" className="ca-container">
        <div className="ca-wrapper">
          <div className="ca-item ca-item-13">
            <div className="ca-item-main in-season">
              <div className="ca-icon"></div>
              <h4>
                <span>Peachy. Delicious.</span>
              </h4>

              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h3>George's Peach</h3>
                  <h6>George's Peach is dedicated to the memory of my father, the original Runningbyrd. Time spent driving Highway 441 past peach orchards in our home state help define its flavor, along with the stories and laughs we shared over tall jars of iced tea on countless southern porches. While he missed Runningbyrd Tea's final journey to the bottle, I've created George's Peach to share some of his spirit with our customers.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-4">
            <div className="ca-item-main in-season">
              <div className="ca-icon"></div>
              <h4>
                <span>Indian masala chai tea. Peppery finish.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h3>Summer Rain</h3>
                  <h6>On hot nights, nothing compares to sitting on the front porch swing feeling a thunderstorm roll in, its wind ruffling your feathers, its fire making you cool. We’ve had a long summer, so open a bottle of this spiced tea to swing the breezes your way. If slowly savored, lightning will crash on your palate.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-5">
            <div className="ca-item-main in-season">
              <div className="ca-icon"></div>
              <h4>
                <span>Thai inspired spiced chai tea, notes of lemongrass and ginger.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
              <div id="carousel-buy-button">

              </div>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h3>Spiced Thai</h3>
                  <h6>While visiting tea plantations in Thailand, I met an elderly man who spent his entire working life tasting teas, judging and critiquing their flavor. I created Spicy Thai for him, melding the flavors of my trip with an idea that he might taste something different after all these years, gifting him a new experience that still felt like an old friend.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-2">
            <div className="ca-item-main">
              <div className="ca-icon"></div>
              <h4>
                <span>Blended with lemongrass, white peach tea and a touch of lavender, a lower caffeine, unsweetened option for today's modern lifestyle.</span>
              </h4>

              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h3>Lemongrass White Peach</h3>
                  <h6>Over the past year, the RBTea Co has welcomed the opportunity to share our stories with DC and listen to your stories. It has been a great experience. We have heard from many customers who just can't have sugar and others who want to enjoy tea at night but need less caffeine.And so we have created Lemongrass White Peach,a no sugar, lower caffeine blend that fits the best parts of our story to the needs of yours. DC, enjoy your story.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-1">
            <div className="ca-item-main in-season">
              <div className="ca-icon"></div>
              <h4>
                <span>A lightly minty tea that tells a story you'll want to hear again and again.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h3>Montgomery Mint</h3>
                  <h6>The Montgomery house in Georgia is a place where travelers, family and friends meet on the front porch, sharing stories between sips. Our childhood there began with a swing from the walnut tree out back, grew into a climb up the magnolia in front and ended with a glass of tea, poured from a carafe always kept full. Without that tea and those fine people, RBTea would not exist. We pay homage with a smooth, welcoming mint tea. Find a friend and some shade; brew your story.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-3">
            <div className="ca-item-main in-season">
              <div className="ca-icon"></div>
              <h4>
                <span>Smoked hazlenut tea, spiced pu erh finish.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h3>Shenandoah Smoke</h3>
                  <h6>Shenandoah Smoke is hand crafted from the finest smoked teas, blended with hazelnut and spices for an almost coffee-like flavor.</h6>
                  <h6>No storytelling is needed for this substantial tea; it's just hard-hitting flavor for the lumberjack in us all.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-10 out-of-season">
            <div className="ca-item-main">
              <span className="out-of-season coming-soon">4th of July Only</span>
              <div className="ca-icon flavor-icon slices"></div>
              <h3>Apple Pie</h3>
              <h4>
                <span>An American tradition, mix of apple teas with notes of cinnamon and vanilla.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>Independence Day in my Georgia home meant deciding whether to make the run to Carolina for fireworks. Everyone has a different tradition for the 4th, but across the south, sweet tea and apple pie come standard. Runningbyrd Tea combines those flavors for an Independence Day Special, Apple Pie Tea</h6><h6>Fireworks not included.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-11 whole-food-exclusive">
            <div className="ca-item-main">
              <span className="out-of-season coming-soon">Whole Foods Exclusive</span>
              <div className="ca-icon flavor-icon"></div>
              <h3>Chocolate Peppermint</h3>
              <h4>
                <span>Tastes like a peppermint patty. Very refreshing.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>Legend has it that John Henry, after bursting his heart defeating the steam powered hammer, asked for two cool drinks of water. I imagine Chocolate Peppermint as those two cool drinks; two flavors, blending to provide a refreshing calm. It is a tea to give pause, to separate your long hard day from the relaxing evening to come.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-8 out-of-season">
            <div className="ca-item-main">
              <div className="ca-icon flavor-icon"></div>
              <span className="out-of-season">Out Of Season</span>
              <h3>Apple Cider Tea</h3>
              <h4>
                <span>A fall mix of hibiscus, rosehips and apple teas. Mulling spices for warmth, wrapped in caramel</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>We gather fresh apples in myriad ways. I used to wait for my little brothers to waltz back down Rural Route 2 pushing a stroller filled with Jonagold, but my godsons race through crunchy leaves to beat each other to the best Braeburn. If time or circumstance keeps you from picking your own apples this season, pluck a bottle of Apple Cider Tea from the shelf instead.</h6>
                  <h6>Apple cider tea is a perfect mix of mulling spices, apple and tea. Let it keep you company in your orchard this autumn.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-7 out-of-season">
            <div className="ca-item-main">
              <div className="ca-icon flavor-icon"></div>
              <span className="out-of-season">Out Of Season</span>
              <h3>Winter Sun</h3>
              <h4>
                <span>A spiced orange tea, hints of grapefruit and sweet oolong.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>On a dreary winter day it can seem like months since you've seen the sun.</h6>
                  <h6>Fortunately, RunningbyTea Co has figured out how to bottle this precious resource.</h6>
                  <h6>Let Winter Sun tea light up your life with its warming blend of orange and spiced teas</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-12 out-of-season">
            <div className="ca-item-main in-season">
              <div className="ca-icon flavor-icon breakfast"></div>
              <span className="out-of-season">Out Of Season</span>
              <h3>District Breakfast</h3>
              <h4>
                <span>An unsweetened oolong with a hint of herbal sweetness.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>My childhood weekends were spent in the garden or the greenhouse. And when your parents are gardeners, sometimes herbs make it into your tea blends. District Breakfast mixes rich Oolong teas with a touch of tarragon to make what we believe is the perfect unsweetened tea. Our journey brought us to the District, let our breakfast tea refresh yours.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-9 out-of-season">
            <div className="ca-item-main">
              <span className="out-of-season">Out Of Season</span>
              <div className="ca-icon flavor-icon"></div>
              <h3>Berry Season</h3>
              <h4>
                <span>Refreshing mix of 5 berry teas, Huckleberry, Raspberry, Blackberry, Mulberry, Strawberry. Raspberry leaves for finish.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>Most of the country has a season in which local berries are abundant. In Seattle, blackberries are available all summer. At times in Georgia, mulberries rain down. Folks in the Twin Cities pick free raspberries. Runningbyrd Tea is bringing berry season to a bottle in DC, saving you the flights and sticky fingers.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-item ca-item-6 out-of-season">
            <div className="ca-item-main">
              <span className="out-of-season">Out Of Season</span>
              <div className="ca-icon flavor-icon"></div>
              <h3>Candy Cane</h3>
              <h4>
                <span>A blend of cinnamon and peppermint teas, All the flavor of its namesake, but with an adult level of sweetness.</span>
              </h4>
              <a href="#" className="ca-more">Read the story</a>
            </div>
            <div className="ca-content-wrapper">
              <div className="ca-content">
                <a href="#" className="ca-close">close</a>
                <div className="ca-content-text">
                  <h6>Every year, my brother and I found a giant candy cane log in our stockings. We would work on them for a month, keeping them untidily wrapped in the fridge, making sure not to grab the wrong stick.</h6>
                  <h6>Candy Cane tea, a wintry mix of cinnamon and mint, stores more nicely on the shelf and can be shared more readily with friends.</h6><h6>Or not...</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Carousel;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Carousel />, document.getElementById('ca-wrapper'));
});
