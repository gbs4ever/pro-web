import React from 'react'
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
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
          length={2}
          slide
          // testimonial
          showControls
          interval={false}
          showIndicators={false}
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <img
                src="https://i.imgur.com/hOcGoxbm.jpg"
                className="rounded-circle img-fluid"
                alt="Photo by PhotoMIX Ltd. from Pexels"
              />
              <p>
                <MDBIcon icon="quote-left" /> Simcha’s High proficiency was
                evident when he accurately diagnosed my problem in short order.
              </p>
              <h4 className="font-weight-bold">Moshe F.</h4>
              <h6 className="font-weight-bold my-3">
                Founder at Construction Company
              </h6>
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon icon="star" className="blue-text" />
              <MDBIcon far icon="star-half" className="blue-text" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <img
                src="https://i.imgur.com/85UzFr4m.jpg"
                className="rounded-circle img-fluid"
                alt="Photo by Tracy Le Blanc from Pexels"
              />

              <p>
                <MDBIcon icon="quote-left" /> Simcha brings HIS expertise to
                deliver what <strong>YOU</strong> want and doesn’t confuse the
                two. It’s really <strong>YOUR</strong> project. Simcha is fully
                transparent and honest.
              </p>
              <h4 className="font-weight-bold">E. W.</h4>
              <h6 className="font-weight-bold my-3">VP of Development</h6>
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
