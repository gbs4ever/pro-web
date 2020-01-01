import React from 'react'
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBTestimonial,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardUp,
  MDBAvatar,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact'
import { Details, Thumbnail } from './styles'

export const Testimonials = () => (
  <MDBContainer id="testimonials">
    <Details>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          slide
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <img
                src="https://i.imgur.com/wI5LSTqt.jpg"
                className="rounded-circle img-fluid"
                alt="Photo by Rodolfo Clix from Pexels"
              />
              <p>
                <MDBIcon icon="quote-left" /> Simcha’s High proficiency was
                evident when he accurately diagnosed my problem in short order.
              </p>
              <h4 className="font-weight-bold">Moshe F.</h4>
              <h6 className="font-weight-bold my-3">
                Founder at Construction Company
              </h6>
              {console.log(
                <MDBIcon icon="star" className="blue" />,
                'test12345'
              )}
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon far icon="star-half" className="blue-text" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <img
                src="https://i.imgur.com/KzYWIyMt.jpg"
                className="rounded-circle img-fluid"
                alt="Photo by Junior Teixeira from Pexels"
              />

              <p>
                <MDBIcon icon="quote-left" /> Simcha brings <strong>HIS</strong>{' '}
                expertise to deliver what <strong>YOU</strong> want and doesn’t
                confuse the two. It’s really <strong>YOUR</strong> project.
                Simcha is fully transparent and honest.
              </p>
              <h4 className="font-weight-bold">E. W.</h4>
              <h6 className="font-weight-bold my-3">VP of Development</h6>
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <img
                src="https://i.imgur.com/KMUJnylb.jpg"
                className="rounded-circle img-fluid"
                alt="Partnership warehousing and logistics"
              />
              <p>
                <MDBIcon icon="quote-left" /> You are not just hiring Simcha as
                a developer to create a Webapp rather someone who understands
                your needs and business as a whole.
              </p>
              <h4 className="font-weight-bold">Aharon Wiener</h4>
              <h6 className="font-weight-bold my-3">Director of Operations</h6>
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </Details>
  </MDBContainer>
)
