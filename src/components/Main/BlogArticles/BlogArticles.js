import React from 'react';
import './BlogArticles.css';
import momAndBabyPic from './mom-baby.jpg';

function DisabilityParenting() {
  return (
    <article className="DisabilityParenting">
      <h2>Disability and Parenting</h2>

      <figure>
        <img src={momAndBabyPic} alt="a beautiful black baby and his mom" />
        <figcaption>
          Photo by{' '}
          <a href="https://unsplash.com/@drezart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Andrae Ricketts
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/woman-in-orange-shirt-carrying-baby-in-white-and-blue-floral-shirt-3Qi0PkM_Wes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </figcaption>
      </figure>

      <p>
        There are so many stereotypes around disabled people. As a disabled
        person, I also carry some prejudices against other disabled people. Sia
        released a movie, Music, that is filled with stereotypes about autistic
        people. Many people in the disability community, especially the autism
        community, have been criticising the movie because they portrayed the
        disabled character in such a terrible way. Please check out
        #ActuallyAutistic for the responses of the autism community of the
        movie.
      </p>

      <p>
        My boyfriend's eight-year-old cousin became friends with a non-verbal
        boy around his age. I think he is on the Autism spectrum. I was shocked
        they were friends. I had an incorrect idea that non-verbal people on the
        Autism spectrum are not sociable. This little boy loves playing with
        other kids his age so much. While my boyfriend's cousin was around he
        would come over every day to fetch him so they can play soccer. He still
        occasionally comes over to check if he is around. I always find him
        riding his bike with other children his age. I always see him in a group
        of other children. I am very ashamed that I have been shocked by the
        fact that he has a lot of friends like other abled children. I am
        working towards actively challenging that prejudice but it will be
        difficult because this is a narrative I have been fed from a young age.
      </p>

      <p>
        I think these prejudices are so dangerous when we think about protecting
        the rights of disabled children. My friend Ntsiki was attacked by people
        on Twitter because she posted an article that said it is problematic for
        parents to wish for "healthy" children when they are pregnant. I just
        want to state I do not have children. I just speak from my experience as
        someone who was a disabled child. Ntsiki is a single black mother of
        two. I think most people think it is harmless to want a healthy child.
        Surely there is nothing wrong with wanting a child who will not
        “suffer”?
      </p>

      <p>
        So here are my problems with this statement. Firstly, I will have to
        explain the definition of disability. The medical community uses the
        medical model of disability. This medical model in its simplest form
        says disability is a result of a part of your body being sick or broken.
        As a result, it needs to be fixed. As disabled activists, we reject this
        model because it frames disabled people as broken. We follow the social
        model. This model says our society actively discriminates against us. As
        a result, this discrimination affects our ability to get health care,
        education, work opportunities, etc. This leads us to live undignified
        lives. So I will make this example. There is nothing wrong with being
        black. Wishing you don't have a black child because you don't want them
        to face racism does not make sense. What you should want as a potential
        parent is a world where the is no racism and your child can live a free
        and dignified life. This is the same principle with disabled children.
        Having a disabled child is expensive because the government only
        provides services for abled bodied children. This is blatant
        discrimination. Public health care, schooling, work opportunities,
        transport, public amenities are not made to be used by disabled people.
        It is shocking that 27 years after democracy we are all okay with this.
        So because all of these opportunities are not available to disabled
        people, people interpret it as the fact that disabled people do not
        belong in society.
      </p>

      <p>
        One of the problems with parents wanting a non-disabled child is because
        it is just not a practical wish. Disability can happen at any point in
        your lifetime. I became disabled at 11. Most children become diagnosed
        with autism at around 2. I remember watching a video made by a disabled
        doctor. While he was in medical school he was in a car accident and had
        a spinal injury. As a result, he became disabled. His mother did not
        care that he was disabled. She moved in with him and became his
        caregiver. As a result, he was able to finish medical school and become
        a doctor. On the other hand, his father completely rejected him. On top
        of this, he decided to leave his wife. Imagine throwing away a marriage
        of over two decades because of your prejudice against disabled people!
        This is why it is so important that current and potential parents
        educate themselves about disability. You don't want to be the person who
        breaks your child spirit because of your own bigotry. In other more
        extreme cases, parents and care-givers have killed their disabled
        children. Some believe they are doing their children a “favour” because
        they are no longer “suffering” from disability. They do not understand
        that suffering is caused by discrimination from society. An even more
        disturbing trend is that often people feel sorry for these caregivers
        when they have killed their disabled children. They see it as the worst
        thing to be a parent or caregiver of a disabled person.
      </p>

      <p>
        This is why I challenge all of you to interrogate any prejudices you
        have against disabled people. Educate yourselves! Ableism, like other
        forms of bigotry, is dangerous and we as a society need to end it.
      </p>
    </article>
  );
}

function BlogArticles() {
  return (
    <section id="blog">
      <DisabilityParenting />
    </section>
  );
}

export default BlogArticles;
