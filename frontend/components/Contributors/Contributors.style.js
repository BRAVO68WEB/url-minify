import styled from 'styled-components'

export default styled.section`
  padding-top: 6rem;

  .contributors {
    &__loading {
      text-align: center;
      font-size: clamp(1.5rem, 2vw, 2.5rem);
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }

  .contributor {
    &-cards {
      list-style: none;
      display: flex;
      padding-left: 1.6rem;
      padding-right: 1.6rem;
      gap: 2rem 1.6rem;
      max-width: 80rem;
      margin: 1rem auto 2rem;
    }

    &-card {
      margin-left: auto;
      margin-right: auto;
      background-color: rgb(255, 255, 255);
      border-radius: 1rem;
      flex: 1 1 auto;
      max-width: 18rem;
      width: 100%;
      flex-direction: column;
      text-align: center;
      padding: 2.4rem 0.8rem;
      position: relative;
      transition: all 0.2s linear;
      transform: scale(0.97);

      &:hover {
        transform: scale(1);
        box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.2);
      }

      &:nth-child(3n-2) {
        .contributor__indicator {
          left: 1rem;
        }
      }

      &:nth-child(3n-1) {
        .contributor__indicator {
          left: 48.5%;
        }
      }

      &:nth-child(3n) {
        .contributor__indicator {
          right: 1rem;
        }
      }
    }

    &__indicator {
      position: absolute;
      top: 1rem;
      width: 0.6rem;
      height: 0.6rem;
      background: green;
      border-radius: 50%;
    }

    &__avatar {
      border-radius: 50%;
      border: 3px solid rgb(53, 205, 240);
      overflow: hidden;

      img {
        max-width: 100%;
        border-radius: 50%;
      }
    }

    &__name {
      color: rgb(29, 146, 224);
      font-size: clamp(1.5rem, calc(4vw + 0.5em), 2.5rem);
      font-weight: bold;
    }

    &__github {
      width: 100%;

      &--link {
        width: 100%;
        transition: all 0.2s linear;
        transform: scale(0.95);
        max-width: max-content;

        &:hover {
          transform: scale(1);
          text-shadow: 1px 1px black;
        }
      }

      &--username {
        display: inline-block;
        margin-left: 0.2rem;
        width: auto;
      }
    }
  }
`
